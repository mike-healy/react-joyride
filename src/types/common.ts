import { CSSProperties, ReactNode } from 'react';
import { ValueOf } from 'type-fest';

import { ACTIONS, EVENTS, LIFECYCLE, STATUS } from '~/literals';

export type Actions = ValueOf<typeof ACTIONS>;
export type Events = ValueOf<typeof EVENTS>;
export type Lifecycle = ValueOf<typeof LIFECYCLE>;
export type Status = ValueOf<typeof STATUS>;

export type AnyObject<T = any> = Record<string, T>;

export interface Locale {
  back?: ReactNode;
  close?: ReactNode;
  last?: ReactNode;
  next?: ReactNode;
  open?: ReactNode;
  skip?: ReactNode;
}

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface ScopeOptions {
  code?: string;
  selector: string | null;
}

export interface Styles {
  beacon: CSSProperties;
  beaconInner: CSSProperties;
  beaconOuter: CSSProperties;
  buttonBack: CSSProperties;
  buttonClose: CSSProperties;
  buttonNext: CSSProperties;
  buttonSkip: CSSProperties;
  options: StylesOptions;
  overlay: CSSProperties;
  overlayLegacy: CSSProperties;
  overlayLegacyCenter: CSSProperties;
  spotlight: CSSProperties;
  spotlightLegacy: CSSProperties;
  tooltip: CSSProperties;
  tooltipContainer: CSSProperties;
  tooltipContent: CSSProperties;
  tooltipFooter: CSSProperties;
  tooltipFooterSpacer: CSSProperties;
  tooltipTitle: CSSProperties;
}

export interface StylesOptions {
  arrowColor: string;
  backgroundColor: string;
  beaconSize: number;
  overlayColor: string;
  primaryColor: string;
  spotlightShadow: string;
  textColor: string;
  width?: string | number;
  zIndex: number;
}
