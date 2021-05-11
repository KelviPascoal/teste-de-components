import React, { FormEvent, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Select } from './components/Select';
import { TextArea } from './components/Textarea';

const App: React.FC = () => {
  const genderOptions = [
    { label: 'Feminino', value: 'feminino' },
    { label: 'Masculino', value: 'masculino' }
  ]

  const [nameValue, setNameValue] = useState('')
  const [idadeValue, setIdadeValue] = useState('')
  const [selectValue, setSelectValue] = useState(genderOptions[0].value)
  const [objetivoProficional, setObjetivoProficional] = useState('')

  function handleTest(event: FormEvent) {
    event.preventDefault();
    console.log(nameValue);
    console.log(idadeValue);
    console.log(selectValue);
    console.log(objetivoProficional);




  }


  return (
    <>
      <h1>opa fion</h1>
      <form action="" onSubmit={handleTest}>
        <Input placeholder="Nome" label="Nome"
          value={nameValue}
          getValue={value => setNameValue(value)}
        />

        <Input placeholder="Idade" label="idade"
          value={idadeValue}
          getValue={value => setIdadeValue(value)} />

        <Select options={genderOptions} label="Genero"
          onChange={(event) => {
            setSelectValue(event.currentTarget.value);
          }} />

        <TextArea label="Objetivo Proficional" cols={50} rows={4} getValue={value => setObjetivoProficional(value)} />

        <Button type="submit">test</Button>
      </form>

    </>
  )
}

export default App;

// value={newRepo} onChange={(e) => setNewRepo(e.target.value)}
