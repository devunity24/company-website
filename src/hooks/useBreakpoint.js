import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const useBreakPoint = () => {
    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.only("xs"))
    const isSm = useMediaQuery(theme.breakpoints.only("sm"));
    const isMd = useMediaQuery(theme.breakpoints.only("md"));
    const isLg = useMediaQuery(theme.breakpoints.only("lg"));
    const isXl = useMediaQuery(theme.breakpoints.up("xl"));

    // Return the appropriate breakpoint
    if (isXs || isSm) return 'sm';
    if (isMd) return 'md';
    if (isLg) return 'lg';
    if (isXl) return 'xl';

}
export default useBreakPoint;
