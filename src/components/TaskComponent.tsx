// src/components/TaskComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setSelectedOption, setDiscountCode, setNotes } from '../features/appSlice';

const TaskComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { selectedOption, discountCode, notes } = useSelector((state: RootState) => state.app);
    const [localDiscountCode, setLocalDiscountCode] = useState('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSelectedOption(e.target.value));
    };

    const handleDiscountCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalDiscountCode(value);
        if (/^DISCOUNT2024$/.test(value)) {
            dispatch(setDiscountCode(value));
        }
    };

    const generateDiscountCode = () => {
        dispatch(setDiscountCode('NEWCODE123'));
    };

    const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setNotes(e.target.value));
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Radio Selection Buttons</h2>
                <div>
                    {['Option A', 'Option B', 'Option C'].map(option => (
                        <label key={option} className="mr-4">
                            <input
                                type="radio"
                                value={option}
                                checked={selectedOption === option}
                                onChange={handleOptionChange}
                            /> {option}
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Discount Code Entry</h2>
                <input
                    type="text"
                    value={localDiscountCode}
                    onChange={handleDiscountCodeChange}
                    className="border p-2 mr-2"
                    placeholder="Enter discount code"
                />
                <button onClick={generateDiscountCode} className="bg-blue-500 text-white p-2 rounded">Generate Code</button>
                <div className="mt-2">Generated/Entered Code: {discountCode}</div>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Notes</h2>
                <textarea
                    value={notes}
                    onChange={handleNotesChange}
                    className="border p-2 w-full"
                    placeholder="Enter notes"
                />
            </div>
        </div>
    );
};

export default TaskComponent;
