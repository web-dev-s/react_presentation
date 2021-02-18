

export const toTitleCase = (str) => {
    if(!str||str.length<1) return '';
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};
export const   isStringData = data => (typeof data === 'string' || data instanceof String);