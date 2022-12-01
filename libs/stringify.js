export const toShortname = (title) => {
    let _title = title.toLowerCase();
    _title = _title.replace(' ', "-");
    _title = _title.replace("'", "");
    _title = _title.replace("/", "-");
    _title = _title.replace("\/", "-");
    return _title;
}