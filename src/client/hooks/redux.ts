import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { RootState } from '../store/reducers';
import { ThunkDispatch } from '@reduxjs/toolkit';

export const useAppDispatch: () => ThunkDispatch<RootState, any, any> = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
