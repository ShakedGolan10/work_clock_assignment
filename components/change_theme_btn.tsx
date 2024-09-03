'use client'
import { IconButton, useTheme } from '@mui/material'
import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '@/providers/theme_context_provider';

export function ChangeThemeBtn() {
    const theme = useTheme();
    const {toggleColorMode} = useThemeContext()
  return (
    <IconButton sx={{ ml: 1, position: 'absolute', width: 'max-content', 
        top:'50vh', left: '0' }} 
        onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>  )
}
