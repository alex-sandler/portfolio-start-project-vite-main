import iconsSprite from '../../assets/images/icons-sprite.svg'

type Icon = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon = ({iconId, width, height, viewBox}) => {
    return(
        <svg width={width || '79'} height={height || '79'} viewBox={viewBox || '0 0 79 79'} fill="none" xmlns="http://www.w3.org/2000/svg" >
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};

