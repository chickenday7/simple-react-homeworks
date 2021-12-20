import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.scss'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {


    const finalClassName = `${className} ${red ? 
        restProps.disabled ? s.redDis: s.red  :
        restProps.disabled ? s.wrapperButtonDis : s.wrapperButton } `
    const finalButton = `${restProps.disabled ? s.defaultDis : s.default}`


    return (
        <div className={finalClassName}>
            <button
                className={finalButton}
                {...restProps}
            />
        </div>
    )
}

export default SuperButton
