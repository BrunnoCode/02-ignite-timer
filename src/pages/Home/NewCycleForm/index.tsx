import { FormContainer, MinuteAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <div className="task-field">
        <label htmlFor="task">
          <span className="desktop-copy">Vou trabalhar em</span>
          <span className="mobile-copy">Tarefa</span>
        </label>
        <TaskInput
          id="task"
          list="task-suggestion"
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          {...register('task')}
        />
      </div>

      <datalist id="task-suggestion">
        <option value="ReactJs" />
        <option value="Git" />
        <option value="JavaScript" />
        <option value="Npm" />
      </datalist>

      <div className="duration-field">
        <label htmlFor="minutesAmount">
          <span className="desktop-copy">durante</span>
          <span className="mobile-copy">Duração (minutos)</span>
        </label>
        <MinuteAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          disabled={!!activeCycle}
          step={5}
          min={1}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span className="duration-suffix">minutos.</span>
      </div>
    </FormContainer>
  )
}
