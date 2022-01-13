import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    textStyle?:string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        textStyle, onClick,
        ...restProps
    }
) => {


    const finalClassName = `${className} ${red
        ? restProps.disabled ? s.redDis: s.red
        : restProps.disabled ? s.wrapperButtonDis : s.wrapperButton} `
    const finalButton = `${restProps.disabled ? s.defaultDis : s.default } ${textStyle}`
    const onClickHandler = (e:any) => {
        onClick && onClick(e)
    }

    return (
        <div className={finalClassName} onClick={onClickHandler}>
            <button
                className={finalButton}
                {...restProps}
            />
        </div>
    )
}

export default SuperButton
