import { CoreConcept2 } from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx'

export default function CoreConcepts() {
    return (<Section title="Core Concepts" id='core-concepts'>
                <ul>
                    {CORE_CONCEPTS.map((conceptItem) => <CoreConcept2 key={conceptItem.title}{...conceptItem}></CoreConcept2>)}
                </ul>
            </Section>);
}