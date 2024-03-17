function Button({ label, onClick, disabled }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className="button">
            <span>{label}</span>
        </button>
    );
}

export default Button;
