import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import { TabButton1, TabButton2 } from './TabButton.jsx';
import Section from './Section.jsx'
import Tabs from './Tabs.jsx';


export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState('');

    let tabContent = <p>Please select a topic.</p>;

    function handleSelected(selectedButton) {
        setSelectedTopic(selectedButton);
    }

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
      <Section title='Example' id='examples'>
        <Tabs buttons={
          <>
            <TabButton1 isSelected={selectedTopic === 'components'} onSelect={() => handleSelected('components')}>Components</TabButton1>
            <TabButton1 isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelected('jsx')}>JSX</TabButton1>
            <TabButton2 isSelected={selectedTopic === 'props'} onClick={() => handleSelected('props')}>Props</TabButton2>
            <TabButton2 isSelected={selectedTopic === 'state'} onClick={() => handleSelected('state')}>State</TabButton2> 
          </>
        }>{tabContent}</Tabs>
      </Section>
    );
}