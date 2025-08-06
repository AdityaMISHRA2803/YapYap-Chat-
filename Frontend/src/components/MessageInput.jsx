import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="w-full px-4 py-3 bg-white/80 dark:bg-zinc-900/80 shadow-lg rounded-b-2xl border-t border-zinc-200 dark:border-zinc-800">
      {imagePreview && (
        <div className="mb-4 flex items-center gap-4">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-xl border-2 border-emerald-400 shadow-md"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shadow flex items-center justify-center hover:bg-rose-100 dark:hover:bg-rose-900 transition"
              type="button"
              aria-label="Remove image"
            >
              <X className="w-4 h-4 text-rose-500" />
            </button>
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Image preview</span>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <div className="flex-1 flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl px-3 py-2 shadow-inner border border-zinc-200 dark:border-zinc-700">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-base placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-900 dark:text-zinc-100"
            placeholder="Type your message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoComplete="off"
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="button"
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-150
              ${imagePreview ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400" : "hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
            aria-label="Attach image"
          >
            <Image size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!text.trim() && !imagePreview}
          aria-label="Send message"
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
