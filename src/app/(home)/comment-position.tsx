   import { ANIMATION_DELAY, CARD_SPACING } from '@/consts'
   import { motion } from 'motion/react'
   import { useCenterStore } from '@/hooks/use-center'
   import { useConfigStore } from './stores/config-store'
   import { HomeDraggableLayer } from './home-draggable-layer'
   
   export default function CommentPosition() {
   	const center = useCenterStore()
   	const { cardStyles, siteContent } = useConfigStore()
   	const styles = cardStyles.commentPosition
   	const hiCardStyles = cardStyles.hiCard
   	const socialButtonsStyles = cardStyles.socialButtons
   	const musicCardStyles = cardStyles.musicCard
   	const shareCardStyles = cardStyles.shareCard
   	const likePositionStyles = cardStyles.likePosition

   	// 计算评论按钮的位置
   	const x = 
    		styles.offsetX !== null ? center.x + styles.offsetX : center.x + hiCardStyles.width / 2 - socialButtonsStyles.width + shareCardStyles.width + CARD_SPACING * 2 + likePositionStyles.width
    	const y = 
    		styles.offsetY !== null 
    			? center.y + styles.offsetY 
    			: center.y + hiCardStyles.height / 2 + CARD_SPACING + socialButtonsStyles.height + CARD_SPACING + musicCardStyles.height + CARD_SPACING

   	return (
    		<HomeDraggableLayer cardKey='commentPosition' x={x} y={y} width={styles.width} height={styles.height}>
    			<motion.div className='absolute max-sm:static' initial={{ left: x, top: y }} animate={{ left: x, top: y }}>
    				{siteContent.enableChristmas && (
    					<>
    						<img
    							src='/images/christmas/snow-13.webp'
    							alt='Christmas decoration'
    							className='pointer-events-none absolute'
    							style={{ width: 40, left: -4, top: -4, opacity: 0.9 }}
    						/>
    					</>
    				)}

    				<motion.a
    					href='https://waline.682000.xyz'
    					target='_blank'
    					rel='noreferrer'
    					initial={{ opacity: 0, scale: 0.6 }}
    					animate={{ opacity: 1, scale: 1 }}
    					whileHover={{ scale: 1.05 }}
    					whileTap={{ scale: 0.95 }}
    					title='查看本站评论'
    					className='card relative overflow-visible rounded-full p-3 bg-card flex h-[53px] w-[53px] items-center justify-center border hover:bg-gray-50 transition-colors'>
    						<span className='text-lg'>💬</span>
    				</motion.a>
    			</motion.div>
    		</HomeDraggableLayer>
    	)
   }