import { Play } from 'phosphor-react'
import { useState } from 'react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  Separator,
  StartCountButton,
  TaskInput,
} from './styles'

export function Home() {

  const [task, setTask] = useState('')

  function resetForm() {
    setTask('')
  }

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <datalist id="task-suggestion">
            <option value="ReactJs" />
            <option value="Git" />
            <option value="JavaScript" />
            <option value="Npm" />
          </datalist>

          <label htmlFor="minutesAmaunt">durante</label>
          <MinuteAmountInput
            type="number"
            id="minutesAmaunt"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountButton disabled={!task} type="submit">
          <Play />
          Começar
        </StartCountButton>
      </form>
    </HomeContainer>
  )
}