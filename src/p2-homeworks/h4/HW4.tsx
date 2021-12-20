import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.scss'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text.trim() ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (



        <div>
            

            <div className={s.column}>
                <div className={s.test}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    necessary
                    // spanClassName={s.testSpanError}
                />
                </div>
                <div className={s.test}>
                <SuperInputText
                    necessary
                    className={s.blue}
                    error={error}
                    spanClassName={s.testSpanError}
                />
                </div>
                <div className={s.test}>
                <SuperButton onClick={showAlert} className={s.testButton} >
                    default
                </SuperButton>
                </div>
                <div className={s.test}>
                <SuperButton
                    red
                    onClick={showAlert}
                >Red Button
                </SuperButton>
                </div>

                <div className={s.test}>
                <SuperButton disabled>
                    Disabled
                </SuperButton>
                </div>
                <div className={s.test}>
                <SuperButton red disabled>
                    Disabled
                </SuperButton>
                </div>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>


                {/*<SuperCheckbox checked={checked} onChange={testOnChange}/>*/}
            </div>

            <hr/>

            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
