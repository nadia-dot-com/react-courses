import { OutsideLink } from 'components/OutsideLink/OutsideLink';
import { TextBlock } from 'components/TextBlock/TextBlock';

export type RelatedDocRef = {
    label: string;
    href: string;
};

export type RelatedDocsProps = {
    docs: RelatedDocRef[];
};

export function RelatedDocs({ docs }: RelatedDocsProps) {
    return (
        <TextBlock type='info' style={{marginTop: '30px'}}>
            📚 Related docs:
            <ul>
                {docs.map((doc) => (
                    <li key={doc.href}>
                        <OutsideLink href={doc.href}>{doc.label}</OutsideLink>
                    </li>
                ))}
            </ul>
        </TextBlock>
    )
}