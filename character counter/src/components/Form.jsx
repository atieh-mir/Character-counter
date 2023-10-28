

export const Form = ({onChangeCharacter}) => {
    return(
        <form  onChange={onChangeCharacter}
        className="form">
        <textarea placeholder='write some text..'></textarea>
        </form>
    )
}