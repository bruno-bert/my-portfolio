interface Props {
    children: JSX.Element | string
}

const Button = ({ children }: Props) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default Button
