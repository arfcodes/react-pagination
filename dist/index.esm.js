import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// Themes
var Theme$1;
(function (Theme) {
    Theme["DEFAULT"] = "DEFAULT";
    Theme["SIMPLE"] = "SIMPLE";
    Theme["MODERN"] = "MODERN";
    Theme["CUSTOM"] = "CUSTOM";
})(Theme$1 || (Theme$1 = {}));
// Colors
var Color$1;
(function (Color) {
    Color["DEFAULT"] = "DEFAULT";
    Color["LIGHT"] = "LIGHT";
    Color["DARK"] = "DARK";
    Color["RED"] = "RED";
    Color["BLUE"] = "BLUE";
    Color["GREEN"] = "GREEN";
    Color["ORANGE"] = "ORANGE";
})(Color$1 || (Color$1 = {}));
// Size constants
var Size$1;
(function (Size) {
    Size["XS"] = "XS";
    Size["SM"] = "SM";
    Size["MD"] = "MD";
    Size["LG"] = "LG";
    Size["XL"] = "XL";
})(Size$1 || (Size$1 = {}));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = "";
styleInject(css_248z$2);

var css_248z$1 = "";
styleInject(css_248z$1);

var css_248z = "";
styleInject(css_248z);

var StyleManager = /** @class */ (function () {
    /**
     * Initialize
     */
    function StyleManager(props) {
        this.prefix = 'pagination__';
        this.theme = props.theme || Theme$1.DEFAULT;
        this.color = props.color || Color$1.DEFAULT;
        this.size = props.size || Size$1.MD;
        this.useClassname = !!props.useClassname;
        this.customStyles = props.customStyles;
        this.styleProps = {};
        this.getStyleProps();
    }
    /**
     * Get classes
     */
    StyleManager.prototype.classes = function (key) {
        var _this = this;
        var keys = key;
        if (!Array.isArray(key)) {
            keys = [key];
        }
        var props = [];
        keys.forEach(function (k) {
            props = props.concat(_this.getClass(k));
        });
        // console.log(keys);
        // console.log(props);
        return classNames(props);
    };
    /**
     * Get classes
     */
    StyleManager.prototype.rootClasses = function () {
        var props = [];
        props.push(this.getClass('root'));
        if (!this.useClassname && this.theme !== Theme$1.CUSTOM) {
            var colorKey = "color" + this.color;
            props.push(this.getStyle(colorKey));
            var sizeKey = "size" + this.size;
            props.push(this.getStyle(sizeKey));
        }
        return classNames(props);
    };
    /**
     * Get class
     */
    StyleManager.prototype.getClass = function (key) {
        if (this.useClassname) {
            return ["" + this.prefix + key];
        }
        else if (this.theme === Theme$1.CUSTOM) {
            if (this.customStyles && this.isValidStyle(key, this.customStyles)) {
                return [this.customStyles[key]];
            }
        }
        else {
            return this.getStyle(key);
        }
    };
    /**
     * Get style
     */
    StyleManager.prototype.getStyle = function (key) {
        var props = [];
        if (this.isValidStyle(key, this.styleProps)) {
            props.push(this.styleProps[key]);
        }
        if (this.customStyles && this.isValidStyle(key, this.customStyles)) {
            props.push(this.customStyles[key]);
        }
        return props;
    };
    /**
     * Get styles props
     */
    StyleManager.prototype.getStyleProps = function () {
        if (this.theme === Theme$1.SIMPLE) {
            this.styleProps = css_248z$1;
        }
        else if (this.theme === Theme$1.MODERN) {
            this.styleProps = css_248z;
        }
        else {
            this.styleProps = css_248z$2;
        }
    };
    /**
     * Get styles props
     */
    StyleManager.prototype.isValidStyle = function (value, props) {
        if (value) {
            return value in props;
        }
        return false;
    };
    return StyleManager;
}());

var Button = function (props) {
    var styler = props.styler, name = props.name, children = props.children, onChange = props.onChange, ariaLabel = props.ariaLabel, disabled = props.disabled, active = props.active;
    var btnClasses = ['button', name];
    if (name !== 'buttonNumber') {
        btnClasses.push('buttonDirectory');
    }
    if (active) {
        btnClasses.push('buttonActive');
    }
    return (jsx("button", __assign({ type: "button", title: ariaLabel, "aria-label": ariaLabel, className: styler.classes(btnClasses), onClick: function (evt) {
            evt.preventDefault();
            onChange();
        }, disabled: disabled }, { children: jsx("span", __assign({ className: styler.classes('buttonContent') }, { children: children }), void 0) }), void 0));
};

var Numbers = function (props) {
    var styler = props.styler, page = props.page, numbersDisplayed = props.numbersDisplayed, marginNumbersDisplayed = props.marginNumbersDisplayed, pagesTotal = props.pagesTotal, onChange = props.onChange, ellipsis = props.ellipsis;
    var ElipsisElement = function () { return (jsx("span", __assign({ className: styler.classes('ellipsis') }, { children: ellipsis || '...' }), void 0)); };
    /**
     * getNumbers
     */
    var getNumbers = function () {
        var half = Math.floor(numbersDisplayed / 2);
        if (half > 1 && numbersDisplayed % 2 === 0) {
            half -= 1;
        }
        var start = page - half;
        if (start < 1) {
            start = 1;
        }
        var end = start + numbersDisplayed;
        if (end > pagesTotal) {
            end = pagesTotal + 1;
            start = pagesTotal - numbersDisplayed + 1;
        }
        var numbers = getRange(start, end);
        return (jsxs(Fragment, { children: [getLeftMargins(start), getButtons(numbers), getRightMargins(end - 1)] }, void 0));
    };
    /**
     * getLeftMargins
     */
    var getLeftMargins = function (first) {
        if (marginNumbersDisplayed === undefined || marginNumbersDisplayed !== 0) {
            var margin = marginNumbersDisplayed ? marginNumbersDisplayed : 1;
            var isShow = true;
            var start = 1;
            var end = start + margin;
            if (end >= first) {
                end = first - 1;
                if (end < 1) {
                    isShow = false;
                }
            }
            var numbers = getRange(start, end);
            if (isShow && numbers.length > 0) {
                return (jsxs(Fragment, { children: [getButtons(numbers), jsx(ElipsisElement, {}, void 0)] }, void 0));
            }
        }
        else if (first > 1) {
            return jsx(ElipsisElement, {}, void 0);
        }
        return null;
    };
    /**
     * getRightMargins
     */
    var getRightMargins = function (last) {
        if (marginNumbersDisplayed === undefined || marginNumbersDisplayed !== 0) {
            var margin = marginNumbersDisplayed ? marginNumbersDisplayed : 1;
            var isShow = true;
            var end = pagesTotal;
            var start = end - (margin - 1);
            if (start <= last) {
                start = last + 1;
                if (start > pagesTotal) {
                    isShow = false;
                }
            }
            var numbers = getRange(start, end + 1);
            if (isShow && numbers.length > 0) {
                return (jsxs(Fragment, { children: [jsx(ElipsisElement, {}, void 0), getButtons(numbers)] }, void 0));
            }
        }
        else if (last < pagesTotal) {
            return jsx(ElipsisElement, {}, void 0);
        }
        return null;
    };
    /**
     * getButtons
     */
    var getButtons = function (numbers) {
        return (jsx(Fragment, { children: numbers.map(function (num) {
                var title = "Go " + num + " page";
                return (jsx(Button, __assign({ styler: styler, name: "buttonNumber", ariaLabel: title, onChange: function () { return onChange(num); }, active: num === page }, { children: num }), "button-" + num));
            }) }, void 0));
    };
    /**
     * getRange
     */
    var getRange = function (start, end) {
        var range = [];
        if (!end || start === end) {
            range = [start];
        }
        else {
            for (var i = start; i < end; i += 1) {
                range.push(i);
            }
        }
        return range;
    };
    return (jsx("span", __assign({ className: styler.classes('numbers') }, { children: getNumbers() }), void 0));
};

var Direction = function (props) {
    var styler = props.styler, page = props.page, pagesTotal = props.pagesTotal, children = props.children, onChange = props.onChange, firstLastButton = props.firstLastButton, nextButtonLabel = props.nextButtonLabel, prevButtonLabel = props.prevButtonLabel, firstButtonLabel = props.firstButtonLabel, lastButtonLabel = props.lastButtonLabel;
    var ButtonNext = function () { return (jsx(Button, __assign({ styler: styler, name: "buttonNext", ariaLabel: "Go next page", onChange: function () { return onChange(page + 1); }, disabled: page === pagesTotal }, { children: nextButtonLabel || 'Next' }), void 0)); };
    var ButtonPrev = function () { return (jsx(Button, __assign({ styler: styler, name: "buttonPrev", ariaLabel: "Go prev page", onChange: function () { return onChange(page - 1); }, disabled: page === 1 }, { children: prevButtonLabel || 'Prev' }), void 0)); };
    var ButtonFirst = function () { return (jsx(Button, __assign({ styler: styler, name: "buttonFirst", ariaLabel: "Go first page", onChange: function () { return onChange(1); }, disabled: page === 1 }, { children: firstButtonLabel || 'First' }), void 0)); };
    var ButtonLast = function () { return (jsx(Button, __assign({ styler: styler, name: "buttonLast", ariaLabel: "Go last page", onChange: function () { return onChange(pagesTotal); }, disabled: page === pagesTotal }, { children: lastButtonLabel || 'Last' }), void 0)); };
    return (jsxs(Fragment, { children: [firstLastButton ? jsx(ButtonFirst, {}, void 0) : null, jsx(ButtonPrev, {}, void 0), children, jsx(ButtonNext, {}, void 0), firstLastButton ? jsx(ButtonLast, {}, void 0) : null] }, void 0));
};

var Main = function (props) {
    var page = props.page, total = props.total, perPage = props.perPage, onChange = props.onChange, theme = props.theme, color = props.color, size = props.size, styles = props.styles, useClassname = props.useClassname, ariaLabel = props.ariaLabel, hideNumbers = props.hideNumbers, numbersDisplayed = props.numbersDisplayed, marginNumbersDisplayed = props.marginNumbersDisplayed, ellipsis = props.ellipsis, firstLastButton = props.firstLastButton, firstButtonLabel = props.firstButtonLabel, lastButtonLabel = props.lastButtonLabel, prevButtonLabel = props.prevButtonLabel, nextButtonLabel = props.nextButtonLabel;
    var pagesTotal = Math.ceil(total / perPage);
    // const [pagesTotal, setPagesTotal] = useState(Math.ceil(total/perPage));
    // useEffect(() => {
    //   setPagesTotal(Math.ceil(total/perPage));
    // }, []);
    var styler = new StyleManager({
        theme: theme,
        color: color,
        size: size,
        customStyles: styles,
        useClassname: useClassname,
    });
    if (pagesTotal > 1) {
        return (jsx("div", __assign({ className: styler.rootClasses() }, { children: jsx("div", __assign({ className: styler.classes('main') }, { children: jsx(Direction, __assign({ page: page, pagesTotal: pagesTotal, styler: styler, onChange: onChange, ariaLabel: ariaLabel, firstLastButton: firstLastButton === undefined ? true : firstLastButton, firstButtonLabel: firstButtonLabel, lastButtonLabel: lastButtonLabel, nextButtonLabel: nextButtonLabel, prevButtonLabel: prevButtonLabel }, { children: jsx(Fragment, { children: !hideNumbers && (jsx(Numbers, { styler: styler, page: page, pagesTotal: pagesTotal, numbersDisplayed: numbersDisplayed || 5, marginNumbersDisplayed: marginNumbersDisplayed, ellipsis: ellipsis, onChange: onChange }, void 0)) }, void 0) }), void 0) }), void 0) }), void 0));
    }
    return null;
};

var Theme = Theme$1;
var Color = Color$1;
var Size = Size$1;

export { Color, Size, Theme, Main as default };
//# sourceMappingURL=index.esm.js.map
