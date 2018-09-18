import * as React from 'react';
import styled from 'app/style/theme';
import { NavLink } from 'react-router-dom';
import { Nav } from 'flexies';

export namespace SideNav {
    export interface IProps {
        links: Nav.IPage[];
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    > a {
        color: white;
        margin-bottom: 5px;
    }
`;

export default class extends React.Component<SideNav.IProps, {}> {
    constructor(props: SideNav.IProps) {
        super(props);
    }
    private _renderLink(link: Nav.IPage, index: any) {
        return (
            <NavLink exact={link.isExactPath} to={link.url} key={index} activeStyle={{ backgroundColor: 'red' }}>
                {link.title}
            </NavLink>
        );
    }
    render() {
        const { links } = this.props;
        const NavLinks: React.ReactElement<{}>[] = links.map(this._renderLink);
        return <Wrapper>{NavLinks}</Wrapper>;
    }
}
