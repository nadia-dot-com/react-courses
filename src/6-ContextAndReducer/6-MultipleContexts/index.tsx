import { ChapterWrapper, Toolbar, RelatedDocs } from 'components';
import { ThemeButton } from './Theme/ThemeButton';
import { ThemeProvider, useCurrentTheme } from './Theme/ThemeContext';
import { ThemeToolbar } from './Theme/ThemeToolbar';
import { UserProvider } from './User/UserContext';
import { UserProfile } from './User/UserProfile';
import { useState } from 'react';
import {InputId} from './InputId'

export function MultipleContextsChapter() {
    const [value, setValue] = useState(1);

    return (
        <ChapterWrapper title="Multiple Contexts" subtitle="Using few different contexts">
            <ThemeProvider>
                {/* you can get current theme in any component in this subtree */}
                <ThemeToolbar />
                <Toolbar>
                    <ThemeButton text="Primary Button" />
                    <ThemeButton text="Disable Button" disabled />
                </Toolbar>
                <UserProvider userId={value}>
                    <Toolbar>
                        <InputId value={value} onChange={setValue}/>
                    </Toolbar>
                    {/* you can get user details in any component in this subtree */}
                    <UserProfile />
                </UserProvider>
            </ThemeProvider>
        </ChapterWrapper>
    )
}

