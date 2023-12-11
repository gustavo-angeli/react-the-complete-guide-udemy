import { useState } from 'react';

import jsxImg from './assets/jsx-ui.png';
import configImg from './assets/config.png';
import Header from './components/Header/Header.jsx'
import {CoreConcept1, CoreConcept2} from './components/CoreConcept.jsx'
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import {TabButton1, TabButton2} from './components/TabButton.jsx';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelected(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>;
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept1
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept1
              title="JSX"
              description="Description"
              image={jsxImg}
            />
            <CoreConcept1
              title="Props"
              description="Description"
              image={configImg}
            />
            <CoreConcept2 
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id='examples'>
          <h2>Example</h2>
          <menu>
            <TabButton1 isSelected={selectedTopic === 'components'} onSelect={() => handleSelected('components')}>Components</TabButton1>
            <TabButton1 isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelected('jsx')}>JSX</TabButton1>
            <TabButton2 isSelected={selectedTopic === 'props'} onSelect={() => handleSelected('props')}>Props</TabButton2>
            <TabButton2 isSelected={selectedTopic === 'state'} onSelect={() => handleSelected('state')}>State</TabButton2>           
          </menu>
          {tabContent}
            {/* {!selectedTopic ? (<p>Please select a topic.</p>) :
              (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>)} */}
        </section>
      </main>
    </div>
  );
}