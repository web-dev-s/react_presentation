import React, { forwardRef, useEffect, useLayoutEffect, useState, useMemo, useCallback, useRef } from 'react';
import { toTitleCase, isStringData } from './helper';
import { ThemedButton, MyInput, RenderItem } from './ThemeContext';
const MyComponent = forwardRef((props, ref) => {
    const refContainer = useRef(), refInput = useRef();
    const [init, setInit] = useState();
    const [renderData, setRenderData] = useState();
    const [showList, setShowList] = useState(false);
    const settingStateClosure = (type, val) => {
        switch (type) { // enclosed setState for Effect hooks call 
            case 'setInit': return setInit(val);
            case 'setRenderData': return setRenderData(val);
            default: return;
        }
    }
    //setting flag for component will mount action
    useLayoutEffect(() => { settingStateClosure('setInit', true); return () => { settingStateClosure('setInit', false); } },  /* eslint-disable-next-line react-hooks/exhaustive-deps */[]);
    // according to component mount flag setting from props (read-only)
    useEffect(() => { settingStateClosure('setRenderData', props.data) }, /* eslint-disable-next-line react-hooks/exhaustive-deps */[init]);
    useEffect(() => { memoizedCallback() },  /* eslint-disable-next-line react-hooks/exhaustive-deps */[renderData]);
    const memoizedCallback = useCallback(() => {
        const titleCase = toTitleCase(props.data?.string); if (renderData?.string == titleCase) { return }
        setTimeout(() => settingStateClosure('setRenderData', { ...renderData, string: titleCase }), 2500);  /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [renderData]);
    const memoizedValue = useMemo(() => { console.log(props.data?.string) }, [props.data?.string]);
    const onBlur = () => {
        console.log('refInput.current: ', refInput.current);  /*  Only contains  what useImperativeHandle exposes! */
        refInput.current.onBlur();
    };
    return (<div ref={refContainer}>
        {renderData?.string ? <p>This component is: {renderData?.string}</p> : <p>No data yet</p>}
        <ThemedButton clicked={() => setRenderData(c => ({ ...c, string: isStringData(props.data?.string) ? props.data?.string?.toLowerCase() : '' }))} />
        <div>
            <MyInput ref={refInput} onBlur={onBlur} onChange={(c) => setShowList(c)} />
            {showList && renderData?.array?.length > 0 &&
                renderData?.array?.map((item, index) => <RenderItem key={item + index} item={item} index={index} />)
            }
        </div>
    </div >)
});

MyComponent.defaultProps = { data: { string: 'function based', array: [] } };
export default MyComponent;