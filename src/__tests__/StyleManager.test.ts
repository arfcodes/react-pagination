
import StyleManager from '../StyleManager';
import { Theme, Color, Size } from '../types';

describe('StyleManager', () => {
  it('default settings is set correctly', () => {
    const styler = new StyleManager({});
    expect(styler.theme).toEqual(Theme.DEFAULT);
    expect(styler.color).toEqual(Color.DEFAULT);
    expect(styler.size).toEqual(Size.MD);
  });

  it("`theme` settings is used correctly", () => {
    const stylerBlock = new StyleManager({
      theme: Theme.BLOCK,
    });
    expect(stylerBlock.theme).toEqual(Theme.BLOCK);

    const stylerLine = new StyleManager({
      theme: Theme.LINE,
    });
    expect(stylerLine.theme).toEqual(Theme.LINE);

    const stylerButtons = new StyleManager({
      theme: Theme.BUTTONS,
    });
    expect(stylerButtons.theme).toEqual(Theme.BUTTONS);
  });

  it("`useClassname` settings is used correctly", () => {
    const styler = new StyleManager({
      useClassname: true,
    });
    expect(styler.classes('button')).toEqual('pagination__button');
  });

  it("class is work correctly", () => {
    const styles = {
      button: 'abcd',
    };
    const custom = {
      button: 'efgh',
    };
    const styler = new StyleManager({
      customStyles: custom,
    });
    styler.styleProps = styles;
    styler.getClassnames();
    expect(styler.classes('button')).toEqual('abcd efgh');
    expect(styler.classes('buttonNext')).not.toEqual('abcd efgh');
    expect(styler.classes('next')).not.toEqual('abcd efgh');
  });

  it("get classnames with array of keys is work correctly", () => {
    const styles = {
      button: 'abcd',
      buttonNext: 'efgh',
    };
    const styler = new StyleManager({});
    styler.styleProps = styles;
    styler.getClassnames();
    expect(styler.classes(['button', 'buttonNext'])).toEqual('abcd efgh');
  });

  it("`customStyles` settings is used correctly", () => {
    const classname = 'abcd';
    const styler = new StyleManager({
      theme: Theme.CUSTOM,
      customStyles: {
        button: classname,
      },
    });
    expect(styler.classes('button')).toEqual(classname);
  });
});