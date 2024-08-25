import { X } from "lucide-react";
import { icons } from "../../assets/icons";

export default function UploadingVideoPopup({fileSize,close}) {

    function handleCancelUpload() { 

    };

    return (
        <div className="p-4 flex flex-col items-center justify-center bg-[#13161f] backdrop-blur-sm border-[0.01rem] border-[#757575] border-dotted rounded-md shadow-black shadow-md w-[500px]">
            <div className="flex flex-col items-start justify-center w-full">
                <h2 className="text-[1.3rem] font-medium">Uploading Video...</h2>
                <h2 className="text-[0.9rem] text-[#b5b4b4] font-medium">Track your video uploading process.</h2>
                <button onClick={close} className="absolute right-4 top-7"><X size={27}/></button>
            </div>

            <div className="flex items-start justify-start w-full border-[0.01rem] rounded-md border-[#d7d7d7] p-3 mt-4">
                <div className="p-[4px] bg-[#E4D3FF] overflow-hidden rounded-full">
                    <div className="size-[25px] fill-none stroke-[#8871ee]">{icons.uploadingVideoIcon}</div>
                </div>
                <div className="ml-3">
                    <div className="text-[1.05rem]">Dashboard prototype recording.mp4</div>
                    <div className="text-[0.9rem] text-[#ececec]">{fileSize} MB</div>
                    <div className="flex items-center justify-start w-full mt-2">
                        <svg aria-hidden="true" className="inline size-5 animate-spin dark:text-[#b5b4b4] fill-[#8871ee]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className='text-md ml-3'>Uploading...</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 w-full mt-6">
                <div className="hover:bg-[#2a2a2a] w-full text-center  border-[0.01rem] border-[#b5b4b4] text-lg">
                    <button onClick={close} className="p-2 w-full">Close</button>
                </div>
                <div className="cursor-pointer hover:font-medium w-full border-transparent text-center border-[0.01rem] hover:border-[#b5b4b4] bg-[#8871ee] text-black text-lg">
                    <button onClick={handleCancelUpload} className="p-2 w-full">Cancel Upload</button>
                </div>
            </div>
        </div>
    )
}