
export const SectionAnimation={
    hidden:{
        y: -200,
        opacity: .5,
        scale: .5
    },
    show:{
        y: 0,
        opacity: 1,
        scale: 1,
        transition:{
            type: "spring",
            duration: 2
        }
    }
}