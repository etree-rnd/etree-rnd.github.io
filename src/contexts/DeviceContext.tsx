import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';

// Context 데이터 구조 정의
interface DeviceContextType {
    isMobileDevice: boolean;
}

// 기본값 설정
const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

// Provider의 prop 타입 정의
interface DeviceProviderProps {
    children: ReactNode;
}

// DeviceProvider 컴포넌트 생성
export const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
    const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

    useEffect(() => {
        setIsMobileDevice(isMobile);
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobileDevice }}>
            {children}
        </DeviceContext.Provider>
    );
};

// 커스텀 훅 생성
export const useDevice = (): DeviceContextType => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error('useDevice must be used within a DeviceProvider');
    }
    return context;
};