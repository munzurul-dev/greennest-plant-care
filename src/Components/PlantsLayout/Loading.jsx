const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5">
    
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <div className="absolute h-8 w-8 rounded-full bg-primary/10" />
      </div>

      
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-base-content">Loading...</h2>
        <p className="text-sm text-base-content/60">Please wait a moment</p>
      </div>

      
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
        <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
        <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
};

export default Loading;
