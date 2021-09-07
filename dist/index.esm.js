import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
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
var Theme;
(function (Theme) {
    Theme["DEFAULT"] = "DEFAULT";
    Theme["BLOCK"] = "BLOCK";
    Theme["LINE"] = "LINE";
    Theme["BUTTONS"] = "BUTTONS";
    Theme["CUSTOM"] = "CUSTOM";
})(Theme || (Theme = {}));
// Colors
var Color;
(function (Color) {
    Color["DEFAULT"] = "DEFAULT";
    Color["LIGHT"] = "LIGHT";
    Color["DARK"] = "DARK";
    Color["RED"] = "RED";
    Color["BLUE"] = "BLUE";
    Color["GREEN"] = "GREEN";
    Color["ORANGE"] = "ORANGE";
})(Color || (Color = {}));
// Size constants
var Size;
(function (Size) {
    Size["XS"] = "XS";
    Size["SM"] = "SM";
    Size["MD"] = "MD";
    Size["LG"] = "LG";
    Size["XL"] = "XL";
})(Size || (Size = {}));

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

var css_248z$3 = ".Default_root__14opK {\n  position: relative;\n}\n\n.Default_main__1P9Yc {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.Default_numbers__2a-nU {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0 20px;\n}\n\n.Default_info__GkGxx {\n  margin: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666666;\n}\n.Default_info__GkGxx + button {\n  margin-left: 0 !important;\n}\n\n.Default_button__14kgc {\n  border: 0 none;\n  background-color: transparent;\n  color: #666666;\n  border-radius: 50px;\n  height: 30px;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.4s;\n  font-size: 14px;\n  font-weight: 600;\n}\n.Default_button__14kgc:hover {\n  background-color: #666666;\n  color: #ffffff;\n}\n.Default_button__14kgc:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.Default_button__14kgc:disabled:hover {\n  background-color: transparent !important;\n  color: #666666;\n}\n.Default_button__14kgc:first-child {\n  margin-left: 0;\n}\n\n.Default_buttonDirectory__Lep6T {\n  margin-left: 2px;\n}\n\n.Default_buttonNumber__13f-E {\n  width: 30px;\n  padding: 0;\n  margin: 0 2px;\n}\n\n.Default_buttonActive__25kQx {\n  background-color: #666666;\n  color: #ffffff;\n}\n\n.Default_ellipsis__1ZcfG {\n  font-size: 14px;\n  font-weight: 500;\n  color: #999999;\n}\n.Default_ellipsis__1ZcfG:first-child {\n  margin-right: 8px;\n}\n.Default_ellipsis__1ZcfG:last-child {\n  margin-left: 8px;\n}\n\n.Default_colorLIGHT__Ta2Sj .Default_button__14kgc:hover {\n  background-color: #bbbbbb;\n}\n\n.Default_colorLIGHT__Ta2Sj .Default_buttonActive__25kQx {\n  background-color: #bbbbbb;\n  color: #ffffff;\n}\n\n.Default_colorLIGHT__Ta2Sj .Default_info__GkGxx {\n  color: #bbbbbb;\n}\n\n.Default_colorDARK__gD231 .Default_button__14kgc:hover {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.Default_colorDARK__gD231 .Default_buttonActive__25kQx {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.Default_colorDARK__gD231 .Default_info__GkGxx {\n  color: #000000;\n}\n\n.Default_colorRED__3Btb5 .Default_button__14kgc:hover {\n  background-color: #ce2948;\n  color: #ffffff;\n}\n\n.Default_colorRED__3Btb5 .Default_buttonActive__25kQx {\n  background-color: #ce2948;\n  color: #ffffff;\n}\n\n.Default_colorRED__3Btb5 .Default_info__GkGxx {\n  color: #ce2948;\n}\n\n.Default_colorBLUE__3vUjF .Default_button__14kgc:hover {\n  background-color: #2a3bbb;\n  color: #ffffff;\n}\n\n.Default_colorBLUE__3vUjF .Default_buttonActive__25kQx {\n  background-color: #2a3bbb;\n  color: #ffffff;\n}\n\n.Default_colorBLUE__3vUjF .Default_info__GkGxx {\n  color: #2a3bbb;\n}\n\n.Default_colorGREEN__3tvOG .Default_button__14kgc:hover {\n  background-color: #2b9b28;\n  color: #ffffff;\n}\n\n.Default_colorGREEN__3tvOG .Default_buttonActive__25kQx {\n  background-color: #2b9b28;\n  color: #ffffff;\n}\n\n.Default_colorGREEN__3tvOG .Default_info__GkGxx {\n  color: #2b9b28;\n}\n\n.Default_colorORANGE__3DAvq .Default_button__14kgc:hover {\n  background-color: #d86520;\n  color: #ffffff;\n}\n\n.Default_colorORANGE__3DAvq .Default_buttonActive__25kQx {\n  background-color: #d86520;\n  color: #ffffff;\n}\n\n.Default_colorORANGE__3DAvq .Default_info__GkGxx {\n  color: #d86520;\n}";
var defaultStyles = {"root":"Default_root__14opK","main":"Default_main__1P9Yc","numbers":"Default_numbers__2a-nU","info":"Default_info__GkGxx","button":"Default_button__14kgc","buttonDirectory":"Default_buttonDirectory__Lep6T","buttonNumber":"Default_buttonNumber__13f-E","buttonActive":"Default_buttonActive__25kQx","ellipsis":"Default_ellipsis__1ZcfG","colorLIGHT":"Default_colorLIGHT__Ta2Sj","colorDARK":"Default_colorDARK__gD231","colorRED":"Default_colorRED__3Btb5","colorBLUE":"Default_colorBLUE__3vUjF","colorGREEN":"Default_colorGREEN__3tvOG","colorORANGE":"Default_colorORANGE__3DAvq"};
styleInject(css_248z$3);

var css_248z$2 = ".Block_root__F2Eo_ {\n  display: flex;\n  flex-direction: row;\n}\n\n.Block_main__2DIS6 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: #666666;\n  border-radius: 50px;\n}\n\n.Block_numbers__SflAy {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0 20px;\n}\n\n.Block_button__-ZRsz {\n  border: 0 none;\n  background-color: transparent;\n  color: #ffffff;\n  height: 30px;\n  padding: 0 14px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0 1px;\n  transition: all 0.4s;\n  font-size: 14px;\n  font-weight: 500;\n}\n.Block_button__-ZRsz:hover {\n  background-color: #404040;\n}\n.Block_button__-ZRsz:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.Block_button__-ZRsz:disabled:hover {\n  background-color: transparent !important;\n  color: #ffffff;\n}\n.Block_button__-ZRsz:first-child {\n  margin-left: 0;\n}\n.Block_button__-ZRsz:last-child {\n  margin-right: 0;\n}\n\n.Block_buttonDirectory__3zmB8 {\n  font-size: 13px;\n}\n.Block_buttonDirectory__3zmB8:first-child {\n  border-radius: 50px 0 0 50px;\n}\n.Block_buttonDirectory__3zmB8:last-child {\n  border-radius: 0 50px 50px 0;\n}\n\n.Block_buttonNumber__1B-OZ {\n  width: 30px;\n  padding: 0;\n}\n\n.Block_buttonFirst__3KA-O {\n  position: relative;\n}\n\n.Block_buttonLast__2rSnM {\n  position: relative;\n}\n\n.Block_buttonActive__cj4mK {\n  background-color: #404040;\n}\n\n.Block_ellipsis__7K7xd {\n  font-size: 14px;\n  font-weight: 500;\n  color: #ffffff;\n  opacity: 0.6;\n}\n.Block_ellipsis__7K7xd:first-child {\n  margin-right: 8px;\n}\n.Block_ellipsis__7K7xd:last-child {\n  margin-left: 8px;\n}\n\n.Block_info__rUfRY {\n  margin: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #ffffff;\n}\n.Block_info__rUfRY + button {\n  margin-left: 0 !important;\n}\n\n.Block_colorLIGHT__1t_TM .Block_main__2DIS6 {\n  background-color: #bbbbbb;\n}\n\n.Block_colorLIGHT__1t_TM .Block_button__-ZRsz {\n  color: #3c3c3c;\n}\n.Block_colorLIGHT__1t_TM .Block_button__-ZRsz:hover {\n  background-color: #888888;\n}\n.Block_colorLIGHT__1t_TM .Block_button__-ZRsz:disabled {\n  color: #3c3c3c;\n}\n\n.Block_colorLIGHT__1t_TM .Block_info__rUfRY {\n  color: #3c3c3c;\n}\n\n.Block_colorLIGHT__1t_TM .Block_buttonActive__cj4mK {\n  background-color: #888888;\n}\n\n.Block_colorDARK__1OBiS .Block_main__2DIS6 {\n  background-color: #000000;\n}\n\n.Block_colorDARK__1OBiS .Block_button__-ZRsz:hover {\n  background-color: #4d4d4d;\n}\n\n.Block_colorDARK__1OBiS .Block_buttonActive__cj4mK {\n  background-color: #4d4d4d;\n}\n\n.Block_colorRED__3I8DF .Block_main__2DIS6 {\n  background-color: #ce2948;\n}\n\n.Block_colorRED__3I8DF .Block_button__-ZRsz:hover {\n  background-color: #8e1c32;\n}\n\n.Block_colorRED__3I8DF .Block_buttonActive__cj4mK {\n  background-color: #8e1c32;\n}\n\n.Block_colorBLUE__27VQp .Block_main__2DIS6 {\n  background-color: #2a3bbb;\n}\n\n.Block_colorBLUE__27VQp .Block_button__-ZRsz:hover {\n  background-color: #172168;\n}\n\n.Block_colorBLUE__27VQp .Block_buttonActive__cj4mK {\n  background-color: #172168;\n}\n\n.Block_colorGREEN__1_lcW .Block_main__2DIS6 {\n  background-color: #2b9b28;\n}\n\n.Block_colorGREEN__1_lcW .Block_button__-ZRsz:hover {\n  background-color: #1a5e18;\n}\n\n.Block_colorGREEN__1_lcW .Block_buttonActive__cj4mK {\n  background-color: #1a5e18;\n}\n\n.Block_colorORANGE__2GYHi .Block_main__2DIS6 {\n  background-color: #d86520;\n}\n\n.Block_colorORANGE__2GYHi .Block_button__-ZRsz:hover {\n  background-color: #954616;\n}\n\n.Block_colorORANGE__2GYHi .Block_buttonActive__cj4mK {\n  background-color: #954616;\n}";
var blockStyles = {"root":"Block_root__F2Eo_","main":"Block_main__2DIS6","numbers":"Block_numbers__SflAy","button":"Block_button__-ZRsz","buttonDirectory":"Block_buttonDirectory__3zmB8","buttonNumber":"Block_buttonNumber__1B-OZ","buttonFirst":"Block_buttonFirst__3KA-O","buttonLast":"Block_buttonLast__2rSnM","buttonActive":"Block_buttonActive__cj4mK","ellipsis":"Block_ellipsis__7K7xd","info":"Block_info__rUfRY","colorLIGHT":"Block_colorLIGHT__1t_TM","colorDARK":"Block_colorDARK__1OBiS","colorRED":"Block_colorRED__3I8DF","colorBLUE":"Block_colorBLUE__27VQp","colorGREEN":"Block_colorGREEN__1_lcW","colorORANGE":"Block_colorORANGE__2GYHi"};
styleInject(css_248z$2);

var css_248z$1 = ".Line_root__3PWbh {\n  display: flex;\n  flex-direction: row;\n}\n\n.Line_main__1kMd0 {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 3px solid #666666;\n}\n\n.Line_numbers__Nh0ht {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0 20px;\n}\n.Line_numbers__Nh0ht + button {\n  margin-left: 0 !important;\n}\n\n.Line_button__1Hi1D {\n  border: 0 none;\n  background-color: transparent;\n  color: #666666;\n  padding: 0 10px;\n  transition: all 0.4s;\n  font-size: 14px;\n  line-height: 14px;\n  font-weight: 600;\n  padding-bottom: 8px;\n  position: relative;\n}\n.Line_button__1Hi1D:after {\n  content: \"\";\n  position: absolute;\n  bottom: -3px;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background-color: #666666;\n  transition: all 0.4s;\n  transform-origin: center bottom;\n}\n.Line_button__1Hi1D:hover:after {\n  height: 6px;\n}\n.Line_button__1Hi1D:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n  color: #666666 !important;\n}\n.Line_button__1Hi1D:disabled:hover {\n  background-color: transparent;\n  color: #666666;\n}\n.Line_button__1Hi1D:disabled:hover:after {\n  height: 3px;\n}\n\n.Line_buttonDirectory__3PAAR {\n  font-size: 13px;\n}\n.Line_buttonDirectory__3PAAR:not(:first-child) {\n  margin-left: 10px;\n}\n\n.Line_buttonNumber__1O5pE {\n  margin: 0 4px;\n}\n\n.Line_buttonFirst__2OItF {\n  position: relative;\n}\n\n.Line_buttonLast__2e5xD {\n  position: relative;\n}\n\n.Line_buttonActive__22cxe:after {\n  height: 6px;\n}\n\n.Line_ellipsis__1XWqz {\n  font-size: 14px;\n  font-weight: 500;\n  color: #999999;\n}\n.Line_ellipsis__1XWqz:first-child {\n  margin-right: 8px;\n}\n.Line_ellipsis__1XWqz:last-child {\n  margin-left: 8px;\n}\n\n.Line_info__1pYKc {\n  margin: 0 15px;\n  font-size: 14px;\n  line-height: 14px;\n  font-weight: 500;\n  color: #666666;\n  padding-bottom: 8px;\n}\n.Line_info__1pYKc + button {\n  margin-left: 0 !important;\n}\n\n.Line_colorLIGHT__hhDck .Line_main__1kMd0 {\n  border-bottom-color: #bbbbbb;\n}\n\n.Line_colorLIGHT__hhDck .Line_button__1Hi1D:after {\n  background-color: #bbbbbb;\n}\n\n.Line_colorDARK__2Kdq5 .Line_main__1kMd0 {\n  border-bottom-color: #000000;\n}\n\n.Line_colorDARK__2Kdq5 .Line_button__1Hi1D {\n  color: #000000;\n}\n.Line_colorDARK__2Kdq5 .Line_button__1Hi1D:after {\n  background-color: #000000;\n}\n\n.Line_colorDARK__2Kdq5 .Line_info__1pYKc {\n  color: #000000;\n}\n\n.Line_colorRED__9ak-B .Line_main__1kMd0 {\n  border-bottom-color: #ce2948;\n}\n\n.Line_colorRED__9ak-B .Line_button__1Hi1D {\n  color: #ce2948;\n}\n.Line_colorRED__9ak-B .Line_button__1Hi1D:after {\n  background-color: #ce2948;\n}\n\n.Line_colorRED__9ak-B .Line_info__1pYKc {\n  color: #ce2948;\n}\n\n.Line_colorBLUE__1mwV7 .Line_main__1kMd0 {\n  border-bottom-color: #2a3bbb;\n}\n\n.Line_colorBLUE__1mwV7 .Line_button__1Hi1D {\n  color: #2a3bbb;\n}\n.Line_colorBLUE__1mwV7 .Line_button__1Hi1D:after {\n  background-color: #2a3bbb;\n}\n\n.Line_colorBLUE__1mwV7 .Line_info__1pYKc {\n  color: #2a3bbb;\n}\n\n.Line_colorGREEN__1if0z .Line_main__1kMd0 {\n  border-bottom-color: #2b9b28;\n}\n\n.Line_colorGREEN__1if0z .Line_button__1Hi1D {\n  color: #2b9b28;\n}\n.Line_colorGREEN__1if0z .Line_button__1Hi1D:after {\n  background-color: #2b9b28;\n}\n\n.Line_colorGREEN__1if0z .Line_info__1pYKc {\n  color: #2b9b28;\n}\n\n.Line_colorORANGE__1U_Bb .Line_main__1kMd0 {\n  border-bottom-color: #d86520;\n}\n\n.Line_colorORANGE__1U_Bb .Line_button__1Hi1D {\n  color: #d86520;\n}\n.Line_colorORANGE__1U_Bb .Line_button__1Hi1D:after {\n  background-color: #d86520;\n}\n\n.Line_colorORANGE__1U_Bb .Line_info__1pYKc {\n  color: #d86520;\n}";
var lineStyles = {"root":"Line_root__3PWbh","main":"Line_main__1kMd0","numbers":"Line_numbers__Nh0ht","button":"Line_button__1Hi1D","buttonDirectory":"Line_buttonDirectory__3PAAR","buttonNumber":"Line_buttonNumber__1O5pE","buttonFirst":"Line_buttonFirst__2OItF","buttonLast":"Line_buttonLast__2e5xD","buttonActive":"Line_buttonActive__22cxe","ellipsis":"Line_ellipsis__1XWqz","info":"Line_info__1pYKc","colorLIGHT":"Line_colorLIGHT__hhDck","colorDARK":"Line_colorDARK__2Kdq5","colorRED":"Line_colorRED__9ak-B","colorBLUE":"Line_colorBLUE__1mwV7","colorGREEN":"Line_colorGREEN__1if0z","colorORANGE":"Line_colorORANGE__1U_Bb"};
styleInject(css_248z$1);

var css_248z = ".Buttons_root__1NQ_s {\n  position: relative;\n}\n\n.Buttons_main__37t7L {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.Buttons_numbers__3_vUu {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 0 15px;\n}\n.Buttons_numbers__3_vUu + button {\n  margin-left: 0;\n}\n\n.Buttons_button__1opJt {\n  border: 0 none;\n  background-color: #666666;\n  color: #ffffff;\n  border-radius: 4px;\n  height: 30px;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.4s;\n  font-size: 14px;\n  font-weight: 600;\n}\n.Buttons_button__1opJt:hover {\n  background-color: #333333;\n}\n.Buttons_button__1opJt:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.Buttons_button__1opJt:disabled:hover {\n  background-color: #666666;\n}\n.Buttons_button__1opJt:first-child {\n  margin-left: 0;\n}\n\n.Buttons_buttonActive__3eB6- {\n  background-color: #333333;\n}\n\n.Buttons_buttonDirectory__a-fnH {\n  margin-left: 8px;\n  font-size: 13px;\n}\n\n.Buttons_buttonNumber__2lYrn {\n  width: 30px;\n  padding: 0;\n  margin: 0 3px;\n}\n\n.Buttons_ellipsis__62Ld_ {\n  display: block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n  background-color: #666666;\n  color: #ffffff;\n}\n.Buttons_ellipsis__62Ld_:first-child {\n  margin-right: 3px;\n}\n.Buttons_ellipsis__62Ld_:last-child {\n  margin-left: 3px;\n}\n\n.Buttons_info__3cxyf {\n  margin: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #666666;\n}\n.Buttons_info__3cxyf + button {\n  margin-left: 0 !important;\n}\n\n.Buttons_colorLIGHT__24vzl .Buttons_button__1opJt, .Buttons_colorLIGHT__24vzl .Buttons_ellipsis__62Ld_ {\n  background-color: #bbbbbb;\n  color: #6f6f6f;\n}\n\n.Buttons_colorLIGHT__24vzl .Buttons_button__1opJt:hover {\n  background-color: #959595;\n}\n.Buttons_colorLIGHT__24vzl .Buttons_button__1opJt:disabled {\n  background-color: #bbbbbb;\n}\n\n.Buttons_colorLIGHT__24vzl .Buttons_buttonActive__3eB6- {\n  background-color: #959595;\n}\n\n.Buttons_colorDARK__J0Swg .Buttons_button__1opJt, .Buttons_colorDARK__J0Swg .Buttons_ellipsis__62Ld_ {\n  background-color: #000000;\n}\n\n.Buttons_colorDARK__J0Swg .Buttons_button__1opJt:hover {\n  background-color: #4d4d4d;\n}\n.Buttons_colorDARK__J0Swg .Buttons_button__1opJt:disabled {\n  background-color: #000000;\n}\n\n.Buttons_colorDARK__J0Swg .Buttons_buttonActive__3eB6- {\n  background-color: #4d4d4d;\n}\n\n.Buttons_colorRED__2idgM .Buttons_button__1opJt, .Buttons_colorRED__2idgM .Buttons_ellipsis__62Ld_ {\n  background-color: #ce2948;\n}\n\n.Buttons_colorRED__2idgM .Buttons_button__1opJt:hover {\n  background-color: #8e1c32;\n}\n.Buttons_colorRED__2idgM .Buttons_button__1opJt:disabled {\n  background-color: #ce2948;\n}\n\n.Buttons_colorRED__2idgM .Buttons_buttonActive__3eB6- {\n  background-color: #8e1c32;\n}\n\n.Buttons_colorBLUE__3KGHQ .Buttons_button__1opJt, .Buttons_colorBLUE__3KGHQ .Buttons_ellipsis__62Ld_ {\n  background-color: #2a3bbb;\n}\n\n.Buttons_colorBLUE__3KGHQ .Buttons_button__1opJt:hover {\n  background-color: #172168;\n}\n.Buttons_colorBLUE__3KGHQ .Buttons_button__1opJt:disabled {\n  background-color: #2a3bbb;\n}\n\n.Buttons_colorBLUE__3KGHQ .Buttons_buttonActive__3eB6- {\n  background-color: #172168;\n}\n\n.Buttons_colorGREEN__3Rhn2 .Buttons_button__1opJt, .Buttons_colorGREEN__3Rhn2 .Buttons_ellipsis__62Ld_ {\n  background-color: #2b9b28;\n}\n\n.Buttons_colorGREEN__3Rhn2 .Buttons_button__1opJt:hover {\n  background-color: #1a5e18;\n}\n.Buttons_colorGREEN__3Rhn2 .Buttons_button__1opJt:disabled {\n  background-color: #2b9b28;\n}\n\n.Buttons_colorGREEN__3Rhn2 .Buttons_buttonActive__3eB6- {\n  background-color: #1a5e18;\n}\n\n.Buttons_colorORANGE___oZlH .Buttons_button__1opJt, .Buttons_colorORANGE___oZlH .Buttons_ellipsis__62Ld_ {\n  background-color: #d86520;\n}\n\n.Buttons_colorORANGE___oZlH .Buttons_button__1opJt:hover {\n  background-color: #954616;\n}\n.Buttons_colorORANGE___oZlH .Buttons_button__1opJt:disabled {\n  background-color: #d86520;\n}\n\n.Buttons_colorORANGE___oZlH .Buttons_buttonActive__3eB6- {\n  background-color: #954616;\n}";
var buttonsStyles = {"root":"Buttons_root__1NQ_s","main":"Buttons_main__37t7L","numbers":"Buttons_numbers__3_vUu","button":"Buttons_button__1opJt","buttonActive":"Buttons_buttonActive__3eB6-","buttonDirectory":"Buttons_buttonDirectory__a-fnH","buttonNumber":"Buttons_buttonNumber__2lYrn","ellipsis":"Buttons_ellipsis__62Ld_","info":"Buttons_info__3cxyf","colorLIGHT":"Buttons_colorLIGHT__24vzl","colorDARK":"Buttons_colorDARK__J0Swg","colorRED":"Buttons_colorRED__2idgM","colorBLUE":"Buttons_colorBLUE__3KGHQ","colorGREEN":"Buttons_colorGREEN__3Rhn2","colorORANGE":"Buttons_colorORANGE___oZlH"};
styleInject(css_248z);

var StyleManager = /** @class */ (function () {
    /**
     * Initialize
     */
    function StyleManager(props) {
        this.prefix = 'pagination__';
        this.theme = props.theme || Theme.DEFAULT;
        this.color = props.color || Color.DEFAULT;
        this.size = props.size || Size.MD;
        this.useClassname = !!props.useClassname;
        this.customStyles = props.customStyles;
        this.styleProps = {};
        this.classnames = {};
        this.getStyleProps();
        this.getClassnames();
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
            var val = typeof _this.classnames[k] !== 'undefined' ? _this.classnames[k] : '';
            props = props.concat(val);
        });
        return classNames(props);
    };
    /**
     * Get styles props
     */
    StyleManager.prototype.getStyleProps = function () {
        if (this.theme === Theme.BLOCK) {
            this.styleProps = blockStyles;
        }
        else if (this.theme === Theme.LINE) {
            this.styleProps = lineStyles;
        }
        else if (this.theme === Theme.BUTTONS) {
            this.styleProps = buttonsStyles;
        }
        else {
            this.styleProps = defaultStyles;
        }
    };
    /**
     * Get classnames
     */
    StyleManager.prototype.getClassnames = function () {
        var names = {
            'root': '',
            'main': '',
            'numbers': '',
            'button': '',
            'buttonDirectory': '',
            'buttonNumber': '',
            'buttonNext': '',
            'buttonPrev': '',
            'buttonFirst': '',
            'buttonLast': '',
            'buttonActive': '',
            'buttonDisable': '',
            'ellipsis': '',
            'info': '',
        };
        for (var key in names) {
            var cn = '';
            if (key === 'root') {
                cn = this.getRootClasses();
            }
            else {
                cn = this.getClass(key);
            }
            names[key] = cn;
        }
        this.classnames = names;
    };
    /**
     * Get root classes
     */
    StyleManager.prototype.getRootClasses = function () {
        var props = [];
        props.push(this.getClass('root'));
        if (!this.useClassname && this.theme !== Theme.CUSTOM) {
            var colorKey = "color" + this.color;
            props.push(this.getStyle(colorKey));
            var sizeKey = "size" + this.size;
            props.push(this.getStyle(sizeKey));
        }
        return props;
    };
    /**
     * Get class
     */
    StyleManager.prototype.getClass = function (key) {
        if (this.useClassname) {
            return ["" + this.prefix + key];
        }
        else if (this.theme === Theme.CUSTOM) {
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
    StyleManager.prototype.isValidStyle = function (value, props) {
        if (typeof props[value] !== 'undefined') {
            return true;
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
    var styler = props.styler, page = props.page, numbersDisplayed = props.numbersDisplayed, marginNumbersDisplayed = props.marginNumbersDisplayed, pagesTotal = props.pagesTotal, onChange = props.onChange, hideEllipsis = props.hideEllipsis, ellipsis = props.ellipsis, ariaLabel = props.ariaLabel;
    var ElipsisElement = function () { return (jsx(Fragment, { children: ellipsis ? jsx(Fragment, { children: ellipsis }, void 0) : (jsx("span", __assign({ className: styler.classes('ellipsis') }, { children: "..." }), void 0)) }, void 0)); };
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
            if (start < 1) {
                start = 1;
            }
        }
        var numbers = getRange(start, end);
        return (jsxs(Fragment, { children: [!hideEllipsis && getLeftMargins(start), getButtons(numbers), !hideEllipsis && getRightMargins(end - 1)] }, void 0));
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
                var title = ariaLabel && typeof ariaLabel.number !== 'undefined'
                    ? ariaLabel.number.replace('{page}', num.toString())
                    : "Go to page " + num;
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
    var styler = props.styler, page = props.page, pagesTotal = props.pagesTotal, children = props.children, onChange = props.onChange, firstLastButton = props.firstLastButton, nextButtonLabel = props.nextButtonLabel, prevButtonLabel = props.prevButtonLabel, firstButtonLabel = props.firstButtonLabel, lastButtonLabel = props.lastButtonLabel, ariaLabel = props.ariaLabel;
    var ButtonNext = function () {
        var title = ariaLabel && typeof ariaLabel.next !== 'undefined'
            ? ariaLabel.next
            : 'Go next page';
        return (jsx(Button, __assign({ styler: styler, name: "buttonNext", ariaLabel: title, onChange: function () { return onChange(page + 1); }, disabled: page === pagesTotal }, { children: nextButtonLabel || 'Next' }), void 0));
    };
    var ButtonPrev = function () {
        var title = ariaLabel && typeof ariaLabel.prev !== 'undefined'
            ? ariaLabel.prev
            : 'Go previous page';
        return (jsx(Button, __assign({ styler: styler, name: "buttonPrev", ariaLabel: title, onChange: function () { return onChange(page - 1); }, disabled: page === 1 }, { children: prevButtonLabel || 'Prev' }), void 0));
    };
    var ButtonFirst = function () {
        var title = ariaLabel && typeof ariaLabel.first !== 'undefined'
            ? ariaLabel.first
            : 'Go first page';
        return (jsx(Button, __assign({ styler: styler, name: "buttonFirst", ariaLabel: title, onChange: function () { return onChange(1); }, disabled: page === 1 }, { children: firstButtonLabel || 'First' }), void 0));
    };
    var ButtonLast = function () {
        var title = ariaLabel && typeof ariaLabel.last !== 'undefined'
            ? ariaLabel.last
            : 'Go last page';
        return (jsx(Button, __assign({ styler: styler, name: "buttonLast", ariaLabel: title, onChange: function () { return onChange(pagesTotal); }, disabled: page === pagesTotal }, { children: lastButtonLabel || 'Last' }), void 0));
    };
    return (jsxs(Fragment, { children: [firstLastButton ? jsx(ButtonFirst, {}, void 0) : null, jsx(ButtonPrev, {}, void 0), children, jsx(ButtonNext, {}, void 0), firstLastButton ? jsx(ButtonLast, {}, void 0) : null] }, void 0));
};

var Main = function (props) {
    var page = props.page, total = props.total, perPage = props.perPage, onChange = props.onChange, theme = props.theme, color = props.color, size = props.size, styles = props.styles, useClassname = props.useClassname, ariaLabel = props.ariaLabel, hideNumbers = props.hideNumbers, numbersDisplayed = props.numbersDisplayed, marginNumbersDisplayed = props.marginNumbersDisplayed, hideEllipsis = props.hideEllipsis, ellipsis = props.ellipsis, children = props.children, firstLastButton = props.firstLastButton, firstButtonLabel = props.firstButtonLabel, lastButtonLabel = props.lastButtonLabel, prevButtonLabel = props.prevButtonLabel, nextButtonLabel = props.nextButtonLabel;
    var perPageVal = perPage || 10;
    var pagesTotal = Math.ceil(total / perPageVal);
    // const [pagesTotal, setPagesTotal] = useState(Math.ceil(total/perPage));
    // useEffect(() => {
    //   setPagesTotal(Math.ceil(total/perPage));
    // }, []);
    var styler = useMemo(function () {
        return new StyleManager({
            theme: theme,
            color: color,
            size: size,
            customStyles: styles,
            useClassname: useClassname,
        });
    }, []);
    if (pagesTotal > 1) {
        return (jsx("div", __assign({ className: styler.classes('root') }, { children: jsx("div", __assign({ className: styler.classes('main') }, { children: jsx(Direction, __assign({ page: page, pagesTotal: pagesTotal, styler: styler, onChange: onChange, ariaLabel: ariaLabel, firstLastButton: firstLastButton === undefined ? true : firstLastButton, firstButtonLabel: firstButtonLabel, lastButtonLabel: lastButtonLabel, nextButtonLabel: nextButtonLabel, prevButtonLabel: prevButtonLabel }, { children: jsxs(Fragment, { children: [!hideNumbers && (jsx(Numbers, { styler: styler, page: page, pagesTotal: pagesTotal, numbersDisplayed: numbersDisplayed || 5, marginNumbersDisplayed: marginNumbersDisplayed, hideEllipsis: hideEllipsis, ellipsis: ellipsis, ariaLabel: ariaLabel, onChange: onChange }, void 0)), children && jsx("div", __assign({ className: styler.classes('info') }, { children: children }), void 0)] }, void 0) }), void 0) }), void 0) }), void 0));
    }
    return null;
};

export { Color, Size, Theme, Main as default };
//# sourceMappingURL=index.esm.js.map
