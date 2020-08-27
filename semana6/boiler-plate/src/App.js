import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: "Texto da primeira tarefa",
        completa: false
      }],

      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    const tasks = this.state.tarefas

    localStorage.setItem("tarefas", JSON.stringify(tasks));
  };

  componentDidMount() {
    const individualTasks = localStorage.getItem("tarefas");
    const separeted = JSON.parse(individualTasks);
    this.setState({tarefas: separeted});
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }
    const novaListaDeTaferas = [novaTarefa, ... this.state.tarefas]
    this.setState({tarefas: novaListaDeTaferas})
  }

  deletarTarefa = (id) => {
    const novaListaDeTaferas = this.state.tarefas.filter((tarefas) => {
        return id === tarefas.id
      })
      this.setState({tarefas: novaListaDeTaferas})
  }

  selectTarefa = (id) => {
    const novaListaDeTaferas  = this.state.tarefas.map((tarefas) => {
      if(id === tarefas.id){
        const novaTarefa = {
          ... tarefas,
          completa: !tarefas.completa
        }
        return novaTarefa
      } else {
        return tarefas
      }
    })
    this.setState({tarefas: novaListaDeTaferas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                <button onClick={this.deletarTarefa}>Deletar Tarefa</button>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
