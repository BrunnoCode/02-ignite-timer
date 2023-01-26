import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinuteAmountInput,
  Separator,
  StartCountButton,
  TaskInput,
} from './styles'
import { useState } from 'react'

const newFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inicie com uma Tarefa Mínimo'),
  minutesAmount: zod.number().min(5).max(60),
})

type newFormCycleData = zod.infer<typeof newFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const { register, handleSubmit, watch, reset } = useForm<newFormCycleData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  function handleCreateNewCycle(data: newFormCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  console.log(activeCycle)
  const task = watch('task')
  const isFormSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor=" task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
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
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountButton disabled={isFormSubmitDisabled} type="submit">
          <Play />
          Começar
        </StartCountButton>
      </form>
    </HomeContainer>
  )
}
