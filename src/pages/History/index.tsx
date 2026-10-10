import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import {
  HistoryCard,
  HistoryContainer,
  HistoryList,
  MobileHistoryList,
  Status,
} from './styles'

function getCycleStatus(cycle: {
  finishedDate?: Date
  interruptedData?: Date
}) {
  if (cycle.finishedDate) {
    return { label: 'Concluído', color: 'green' as const }
  }

  if (cycle.interruptedData) {
    return { label: 'Interrompido', color: 'red' as const }
  }

  return { label: 'Em andamento', color: 'yellow' as const }
}

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              const status = getCycleStatus(cycle)

              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    <Status statusColor={status.color}>{status.label}</Status>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <MobileHistoryList>
          {cycles.map((cycle) => {
            const status = getCycleStatus(cycle)

            return (
              <HistoryCard key={cycle.id}>
                <div>
                  <dt>Tarefa</dt>
                  <dd>{cycle.task}</dd>
                </div>
                <div>
                  <dt>Duração</dt>
                  <dd>{cycle.minutesAmount} minutos</dd>
                </div>
                <div>
                  <dt>Início</dt>
                  <dd>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>
                    <Status statusColor={status.color}>{status.label}</Status>
                  </dd>
                </div>
              </HistoryCard>
            )
          })}
        </MobileHistoryList>
      </HistoryList>
    </HistoryContainer>
  )
}
