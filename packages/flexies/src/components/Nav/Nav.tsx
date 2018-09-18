import * as React from "react"
import styled from "../theme"

export namespace Nav {
    export interface IProps {
        groups: ILinkGroup[]
        onLinkClick?: (ev: React.MouseEvent<HTMLElement>, item: ILink) => void
    }

    export interface IPage {
        /**
         * The page's title, as shown in the navigation.
         */
        title: string

        /**
         * URL for this page, relative to the site's root.
         */
        url: string

        /**
         * Unique CSS class name for this page.
         */
        className?: string

        /**
         * The component to render for this page's content.
         */
        component?: any

        /**
         *  Loads the component using require.ensure;
         */
        getComponent?: (cb: (obj: any) => void) => any

        /**
         * Optional array of child pages belonging to this one.
         */
        pages?: IPage[]

        /**
         * Whether this page should be hidden from the main nav.
         */
        isHiddenFromMainNav?: boolean

        /**
         * Whether this is the home page.
         * @default false
         */
        isHomePage?: boolean

        /**
         * Whether this link appears in the UHF header nav.
         * This flag is different from isHiddenFromMainNav because we want the UHF link's childLinks to be rendered.
         * isHiddenFromMainNav will not render childLinks.
         * @default false
         */
        isUhfLink?: boolean

        isExactPath?: boolean
    }

    export interface ILink {
        text?: string
        key: string
        url?: string
        links?: ILink[]
        onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: ILink) => void
    }
    export interface ILinkGroup {
        text: string
        url?: string
        key?: string
        links?: ILink[]
    }
}

const NavGroup = styled.button`
    background: ${props => props.theme.themeDarkAlt};
    color: white;
    border: none;
    line-height: 24px;
    text-align: left;
    display: flex;
    cursor: pointer;
    :focus {
        outline: none !important;
    }
    :hover {
        background: ${props => props.theme.themeLight};
    }
    & > * {
        margin-right: ${props => props.theme.marginRight};
    }
`

const Wrapper = styled.div`
    background-color: ${props => props.theme.themeDarkAlt};
    color: white;
    height: 100%;
    /* min-width: 215px; */
    display: flex;
    flex-direction: column;
    padding: 12px;
`
const List = styled.ul`
    margin: 0;
    list-style-type: none;
    padding-left: 5px;

    & > li {
        line-height: 30px;
    }
`

const ListItem = styled.li`
    cursor: pointer;
    & > li {
        /* margin-top: 10px; */
    }
`
const Link = styled.a`
    text-decoration: none;
`

export class Nav extends React.Component<Nav.IProps, {}> {
    constructor(props: Nav.IProps) {
        super(props)
    }

    private _renderGroup = (group: Nav.ILinkGroup, groupIndex: number): React.ReactElement<{}> => {
        return (
            <div key={groupIndex}>
                <NavGroup key={groupIndex} onClick={this._onGroupHeaderClicked.bind(this, group)}>
                    {/* <Icon iconName="AppIconDefault" size={12} /> */}
                    {group.text}
                    <div style={{ marginLeft: "auto" }}>{/* <Icon iconName="Add" size={9} /> */}</div>
                </NavGroup>
                <div style={{ marginLeft: 15 }}>{this._renderLinks(group.links, 0)}</div>
            </div>
        )
    }
    private _renderLinks(links: Nav.ILink[] | undefined, nestingLevel: number): React.ReactElement<{}> | null {
        if (!links || !links.length) {
            return null
        }
        const linkElements: React.ReactElement<{}>[] = links.map((link: Nav.ILink, linkIndex: number) =>
            this._renderLink(link, linkIndex, nestingLevel),
        )

        return <List role="list">{linkElements}</List>
    }

    private _renderLink(link: Nav.ILink, linkIndex: number, nestingLevel: number): React.ReactElement<{}> {
        return (
            <ListItem key={link.key || linkIndex} role="listitem">
                {this._renderCompositeLink(link, linkIndex, nestingLevel)}
                {this._renderLinks(link.links, ++nestingLevel)}
            </ListItem>
        )
    }
    private _renderCompositeLink(link: Nav.ILink, linkIndex: number, nestingLevel: number): React.ReactElement<{}> {
        return (
            <div key={link.key || linkIndex}>
                {link.links && link.links.length > 0 ? <button>{link.text}</button> : null}
                {this._renderNavLink(link, linkIndex, nestingLevel)}
            </div>
        )
    }
    private _onLinkClicked(link: Nav.ILink, ev: React.MouseEvent<HTMLElement>) {
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link)
        }
    }
    private _renderNavLink(link: Nav.ILink, linkIndex: number, nestingLevel: number): JSX.Element {
        return (
            <div>
                <div style={{ marginLeft: -20 }}>{/* <Icon iconName="CaretSolidRight" size={9} /> */}</div>
                <Link href={link.url} onClick={this._onLinkClicked.bind(this, link)}>
                    {link.text}
                </Link>
            </div>
        )
    }
    private _onGroupHeaderClicked(group: Nav.ILinkGroup, ev: React.MouseEvent<HTMLElement>): void {
        ev.preventDefault()
        ev.stopPropagation()
    }

    render() {
        const { groups } = this.props
        const groupElements: React.ReactElement<{}>[] = groups.map(this._renderGroup)

        return <Wrapper>{groupElements}</Wrapper>
    }
}
