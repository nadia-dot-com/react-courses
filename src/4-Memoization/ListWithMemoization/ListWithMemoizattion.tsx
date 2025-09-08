import { ChapterWrapper, RelatedDocs } from "components";
import { useRerender } from "hooks/useRerender";
import { ITEMS } from "4-Memoization/ItemData";
import { EmojisGallery } from '4-Memoization/ListWithMemoization/EmojisGallery';

export function ListWithMemoization() {
    const rerender = useRerender();

    return (
        <ChapterWrapper title="useCallback" subtitle="List with memoization">
            <EmojisGallery items={ITEMS} />
            <RelatedDocs
                docs={[
                    {
                        label: 'useCallback',
                        href: 'https://react.dev/reference/react/useCallback',
                    },
                    {
                        label: 'useMemo',
                        href: 'https://react.dev/reference/react/useMemo',
                    },
                    {
                        label: 'Skipping Re-rendering with memo',
                        href: 'https://react.dev/reference/react/memo',
                    },
                ]}
            />
        </ChapterWrapper>
    )
}