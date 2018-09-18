import * as React from "react";
export declare namespace Nav {
    interface IProps {
        groups: ILinkGroup[];
        onLinkClick?: (ev: React.MouseEvent<HTMLElement>, item: ILink) => void;
    }
    interface IPage {
        /**
         * The page's title, as shown in the navigation.
         */
        title: string;
        /**
         * URL for this page, relative to the site's root.
         */
        url: string;
        /**
         * Unique CSS class name for this page.
         */
        className?: string;
        /**
         * The component to render for this page's content.
         */
        component?: any;
        /**
         *  Loads the component using require.ensure;
         */
        getComponent?: (cb: (obj: any) => void) => any;
        /**
         * Optional array of child pages belonging to this one.
         */
        pages?: IPage[];
        /**
         * Whether this page should be hidden from the main nav.
         */
        isHiddenFromMainNav?: boolean;
        /**
         * Whether this is the home page.
         * @default false
         */
        isHomePage?: boolean;
        /**
         * Whether this link appears in the UHF header nav.
         * This flag is different from isHiddenFromMainNav because we want the UHF link's childLinks to be rendered.
         * isHiddenFromMainNav will not render childLinks.
         * @default false
         */
        isUhfLink?: boolean;
        isExactPath?: boolean;
    }
    interface ILink {
        text?: string;
        key: string;
        url?: string;
        links?: ILink[];
        onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: ILink) => void;
    }
    interface ILinkGroup {
        text: string;
        url?: string;
        key?: string;
        links?: ILink[];
    }
}
export declare class Nav extends React.Component<Nav.IProps, {}> {
    constructor(props: Nav.IProps);
    private _renderGroup;
    private _renderLinks;
    private _renderLink;
    private _renderCompositeLink;
    private _onLinkClicked;
    private _renderNavLink;
    private _onGroupHeaderClicked;
    render(): JSX.Element;
}
