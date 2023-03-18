import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import { HomeContainer, StartCountButton, StopCountButton } from './styles'
import { useContext } from 'react'
import { Countdown } from './CountDown'
import { NewCycleForm } from './NewCycleForm'
import { CyclesContext } from '../../contexts/CyclesContext'

const newFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Inicie com uma Tarefa Mínimo'),
  minutesAmount: zod.number().min(1).max(60),
})

type newFormCycleData = zod.infer<typeof newFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<newFormCycleData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset  } = newCycleForm

  function handleCreateNewCycle(data: newFormCycleData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isFormSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountButton>
        ) : (
          <StartCountButton disabled={isFormSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountButton>
        )}
      </form>
    </HomeContainer>
  )
}
