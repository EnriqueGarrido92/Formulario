import { motion } from 'framer-motion'
import type { CardInnovacionType } from '../types'

type CardPropsType = {
    cards: CardInnovacionType[]
}

export default function CardInnovacion({ cards }: CardPropsType) {
    return (
        <>
            {cards.map((card) => (
                <motion.div
                    key={card.titulo}
                    initial={{ opacity: 0 }}            
                    whileInView={{ opacity: 1 }}      
                    transition={{ duration: 0.9, delay: 0.2, ease: 'easeIn' }}
                    viewport={{ once: true, amount: 0.5 }}   // solo se anima la primera vez, al 50% visible
                    className="flex flex-col gap-2 border border-neutral-400 rounded-lg px-4 py-6 shadow-lg shadow-neutral-400 min-h-35"
                >
                    <h3 className="text-xl font-bold">{card.titulo}</h3>
                    <p className="text-neutral-600">{card.descripcion}</p>
                </motion.div>
            ))}
        </>
    )
}
