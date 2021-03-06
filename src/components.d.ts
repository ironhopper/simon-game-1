/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface SnApp {}
  interface SnAppAttributes extends StencilHTMLAttributes {}

  interface SnGame {
    'history': RouterHistory;
  }
  interface SnGameAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface SnGameboard {
    'animationPattern': number[];
  }
  interface SnGameboardAttributes extends StencilHTMLAttributes {
    'animationPattern'?: number[];
    'onGamepadTouched'?: (event: CustomEvent) => void;
  }

  interface SnGameover {
    'match': MatchResults;
  }
  interface SnGameoverAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface SnHighscore {}
  interface SnHighscoreAttributes extends StencilHTMLAttributes {}

  interface SnMenu {}
  interface SnMenuAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SnApp': Components.SnApp;
    'SnGame': Components.SnGame;
    'SnGameboard': Components.SnGameboard;
    'SnGameover': Components.SnGameover;
    'SnHighscore': Components.SnHighscore;
    'SnMenu': Components.SnMenu;
  }

  interface StencilIntrinsicElements {
    'sn-app': Components.SnAppAttributes;
    'sn-game': Components.SnGameAttributes;
    'sn-gameboard': Components.SnGameboardAttributes;
    'sn-gameover': Components.SnGameoverAttributes;
    'sn-highscore': Components.SnHighscoreAttributes;
    'sn-menu': Components.SnMenuAttributes;
  }


  interface HTMLSnAppElement extends Components.SnApp, HTMLStencilElement {}
  var HTMLSnAppElement: {
    prototype: HTMLSnAppElement;
    new (): HTMLSnAppElement;
  };

  interface HTMLSnGameElement extends Components.SnGame, HTMLStencilElement {}
  var HTMLSnGameElement: {
    prototype: HTMLSnGameElement;
    new (): HTMLSnGameElement;
  };

  interface HTMLSnGameboardElement extends Components.SnGameboard, HTMLStencilElement {}
  var HTMLSnGameboardElement: {
    prototype: HTMLSnGameboardElement;
    new (): HTMLSnGameboardElement;
  };

  interface HTMLSnGameoverElement extends Components.SnGameover, HTMLStencilElement {}
  var HTMLSnGameoverElement: {
    prototype: HTMLSnGameoverElement;
    new (): HTMLSnGameoverElement;
  };

  interface HTMLSnHighscoreElement extends Components.SnHighscore, HTMLStencilElement {}
  var HTMLSnHighscoreElement: {
    prototype: HTMLSnHighscoreElement;
    new (): HTMLSnHighscoreElement;
  };

  interface HTMLSnMenuElement extends Components.SnMenu, HTMLStencilElement {}
  var HTMLSnMenuElement: {
    prototype: HTMLSnMenuElement;
    new (): HTMLSnMenuElement;
  };

  interface HTMLElementTagNameMap {
    'sn-app': HTMLSnAppElement
    'sn-game': HTMLSnGameElement
    'sn-gameboard': HTMLSnGameboardElement
    'sn-gameover': HTMLSnGameoverElement
    'sn-highscore': HTMLSnHighscoreElement
    'sn-menu': HTMLSnMenuElement
  }

  interface ElementTagNameMap {
    'sn-app': HTMLSnAppElement;
    'sn-game': HTMLSnGameElement;
    'sn-gameboard': HTMLSnGameboardElement;
    'sn-gameover': HTMLSnGameoverElement;
    'sn-highscore': HTMLSnHighscoreElement;
    'sn-menu': HTMLSnMenuElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
