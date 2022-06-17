export interface AppProps {
  isScriptLoaded: boolean;
  isScriptLoadSucceed: boolean;
}

export interface HeaderProps {
  title: string;
}

export interface PrintMarkersProps {
  markersList: any;
}

export interface MarkerListProps {
  lat: number;
  lng: number;
  locationName: string;
}

export  interface SearchProps {}