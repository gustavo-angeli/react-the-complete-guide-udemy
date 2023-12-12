import { CoreConcept2 } from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
    return (<section id='core-concepts'>
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((conceptItem) => <CoreConcept2 {...conceptItem}></CoreConcept2>)}
                </ul>
            </section>);
}