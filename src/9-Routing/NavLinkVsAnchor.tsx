import { ChapterWrapper, RelatedDocs, StyledLink } from "components";
import { BASE_PATH, RouterPath } from "config/RouterPath";
import { Link } from "react-router-dom";
import styles from './NavLinkVsAnchor.module.css'

export function NavLinkVsAnchor() {
    return (
        <ChapterWrapper title="NavLink vs anchor" subtitle="Routing">
                <p>
                    <a className={styles.a} href={`${BASE_PATH}/${RouterPath.ABOUT}`}>about page (anchor tag)</a>
                </p>
                <p>
                    <StyledLink reloadDocument to={'/'+ RouterPath.ABOUT}>aboute page (NavLink)</StyledLink>
                </p>
                {/* <Link to="/about">Назад до About</Link> */}
                <RelatedDocs
                 docs={[
                    {
                        label: 'NavLink',
                        href: 'https://reactrouter.com/api/components/NavLink',
                    },
                ]}
                />
        </ChapterWrapper>
    )
}