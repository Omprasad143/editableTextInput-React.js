import {Component} from 'react'

import {
  BgContainer,
  BgSubContainer,
  Heading,
  EditableContainer,
  UserInput,
  Button,
  Description,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    isButtonClicked: false,
    EditableText: '',
  }

  onChangeEditableText = event => {
    this.setState({EditableText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditableText, isButtonClicked} = this.state
    const EditSaveButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <BgContainer>
        <BgSubContainer>
          <Heading>Editable Text Input</Heading>
          <EditableContainer>
            {isButtonClicked ? (
              <Description>{EditableText}</Description>
            ) : (
              <UserInput
                type="text"
                value={EditableText}
                onChange={this.onChangeEditableText}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {EditSaveButton}
            </Button>
          </EditableContainer>
        </BgSubContainer>
      </BgContainer>
    )
  }
}

export default EditableTextInput
