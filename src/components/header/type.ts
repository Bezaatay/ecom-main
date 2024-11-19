export type HeaderProps = {
    title?: string,
    leftIconName?: string,
    rightIconName?: string,
    isBcgVisible?: boolean,
    isRightIconVisible?: boolean,
    onPressRightIcon?: () => void,
    onPressleftIcon?: () => void,
    badgeCount: number
}