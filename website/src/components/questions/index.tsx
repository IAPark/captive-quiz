


export interface  QuestionProps<QuestionValue>{
    onChanged: (answer: QuestionValue) => void;
    value?: QuestionValue,
    label: string
}