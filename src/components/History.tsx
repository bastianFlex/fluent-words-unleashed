
import { useTyping } from "@/context/TypingContext";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { History as HistoryIcon } from "lucide-react";
import { formatTime } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const History = () => {
  const { history } = useTyping();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <HistoryIcon className="h-5 w-5 text-primary" />
            <span>History</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {history.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No typing history yet. Complete some exercises to see your progress!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Language</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>WPM</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {history.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{formatDate(entry.date)}</TableCell>
                      <TableCell>{entry.language}</TableCell>
                      <TableCell className="capitalize">{entry.difficulty.replace("_", " ")}</TableCell>
                      <TableCell>{entry.wpm}</TableCell>
                      <TableCell>{entry.accuracy}%</TableCell>
                      <TableCell>{formatTime(entry.duration)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default History;
