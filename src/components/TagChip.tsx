interface TagChipProps {
    tag: string;
    className?: string;
}

export function TagChip({ tag, className }: TagChipProps) {
    return (
        <span className={`px-2 py-1 rounded-md ${className}`}>
            {tag}
        </span>
    );
}