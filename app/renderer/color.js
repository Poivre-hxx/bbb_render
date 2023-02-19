function toRgb(e) {
    return e = e.replace(/[^0-9a-f]/gi, ""), 3 === e.length && (e = e.replace(/(.)/g, "$1$1")), e = e.match(/.{2}/g), e = e.map(function(e) {
        return parseInt(e, 16)
    }), e
} 