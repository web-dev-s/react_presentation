import React, { useContext, useState, forwardRef, memo, useRef, useImperativeHandle, useEffect } from 'react';
const themes = {
    light: { foreground: "darkblue", background: "aliceBlue" },
    dark: { foreground: "#ffffff", background: "midnightblue" }
};
export const ThemeContext = React.createContext(themes);
export const ThemedButton = (props) => {
    const theme = useContext(ThemeContext);
    const [buttonStyle, setButtonStyle] = useState({
        background: theme.dark.background, color: theme.dark.foreground,
        margin: '20px', padding: '20px', borderRadius: '20px', outline: 'none'
    });
    const [btnTitle, setBtnTitle] = useState('I am styled by theme context!');
    const { clicked } = props;
    const onClick = (e) => {
        setBtnTitle(c => c == 'I am styled by theme context!' ? 'Ready for another Click' : 'I am styled by theme context!');
        if (clicked) { clicked() }
    }
    return (
        <button style={buttonStyle} onClick={onClick}
            onMouseEnter={() => setButtonStyle(c => ({ ...c, background: theme.light.background, color: theme.light.foreground, }))}
            onMouseLeave={() => setButtonStyle(c => ({ ...c, background: theme.dark.background, color: theme.dark.foreground, }))}
        >{btnTitle}
        </button>
    );
};
export const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    const [val, setVal] = useState('');
    const [label, setLabel] = useState(props?.label); const settingLabel = v => setLabel(v);
    useEffect(() => { settingLabel(inputRef?.current?.checked ? 'hide list' : 'showList') }, [val]);
    useImperativeHandle(ref, () => ({ onBlur: () => { document.title = label; inputRef.current.blur(); } }));
    const changeInputByRef = () => {
        if (!inputRef?.current) return;
        if (props?.onChange) { props.onChange(!inputRef?.current?.checked) }
        inputRef.current.checked = !inputRef?.current?.checked; setVal(c => !c);
    };
    return (<div onClick={_ => changeInputByRef()}  >
        <input type='checkbox' ref={inputRef}
            onChange={_ => changeInputByRef()}
            {...props}
        />
        <label>{label}</label>
    </div>
    );
});
export const RenderItem = memo(props => {
    const { item, index } = props;
    return (<div><p>{item}</p></div>)
}, (prevProps, nextProps) => prevProps?.index !== nextProps?.index);