import { ChapterWrapper, RelatedDocs, StyledLink } from 'components';
import { RouterPath } from 'config/RouterPath';
import { Link, NavLink } from 'react-router';
import { Route } from 'storybook/internal/router';

export function LinkVsNavLink() {
    return (
        <ChapterWrapper  title="Link vs NavLink" subtitle="Routing">
            <table>
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Link</th>
                        <th>NavLink</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>/about</code>
                        </td>
                        <td>
                            <Link to="/About">About</Link>
                        </td>
                        <td>
                            <NavLink to="/about">About</NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>.</code>
                        </td>
                        <td>
                            <Link to=".">Current Page</Link>
                        </td>
                        <td>
                            <NavLink to=".">Current Page</NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>.</code>
                        </td>
                        <td>
                            <Link to=".">Current Page</Link>
                        </td>
                        <td>
                            <StyledLink to='.'>Curernt Page</StyledLink>
                        </td>
                        <td>
                            with <code>active</code> styles
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>.</code>
                        </td>
                        <td>
                            <Link  to="." reloadDocument>
                                Reload Page
                            </Link>
                        </td>
                        <td>
                            <StyledLink to="." reloadDocument>
                                Reload Page
                            </StyledLink>
                        </td>
                        <td>
                            <code>reloadDocument</code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>../{RouterPath.USE_LOCATION}</code>
                        </td>
                        <td>
                            <Link to={`../${RouterPath.USE_LOCATION}`} replace>
                                useLocation
                            </Link>
                        </td>
                        <td>
                            <StyledLink to={`../${RouterPath.USE_LOCATION}`} replace>
                                useLocation
                            </StyledLink>
                        </td>
                        <td>
                            <code>replace</code>
                        </td>
                    </tr>
                </tbody>
            </table>


            <RelatedDocs
                docs={[
                    {
                        label: 'Link',
                        href: 'https://reactrouter.com/api/components/Link',
                    },
                    {
                        label: 'NavLink',
                        href: 'https://reactrouter.com/api/components/NavLink',
                    },
                ]}
            />
        </ChapterWrapper>
    )
}