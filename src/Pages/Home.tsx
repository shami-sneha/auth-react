import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ToDoColumn } from './columns/ToDo';
import { InProgressColumn } from './columns/InProgress';
import { DoneColumn } from './columns/Done';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { todoSlice as todo } from '../redux/slice/todo';
import { inProgressSlice as inProgress } from '../redux/slice/inProgress';
import { doneSlice as done } from '../redux/slice/done';
import { StoreState } from '../redux/store';
import { IModel } from '../types';

const PageContainer = styled.div`
width: 100%;
  margin-left: 80px;
  margin-top: 30px;/* Adjust the value as needed */
  padding-left: 20px; /* Adjust as needed */
  padding-right: 20px; /* Adjust as needed */
`;


const Title = styled(Typography)`
  font-size: 24px;
  color: blue;
  text-align: center;
  margin-bottom: 30px;

`;

const GridContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  color: green;

  
`;

const Column = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
 
`;
const StyledTitle = styled.h2`
  font-size: 32px; /* Increase font size */
  color: #333333; /* Set text color */
  text-align: center; /* Center align text */
  margin-bottom: 30px; /* Add bottom margin */
  margin-top: 20px;
`;



const Home: React.FC = () => {
  const dispatch = useDispatch();
  const appState = useSelector((state: StoreState) => state);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const { destination, source, draggableId } = result;
    const allSlices = { todo, inProgress, done };

    if (destination.droppableId === source.droppableId) {
      dispatch(allSlices[destination.droppableId as keyof typeof allSlices].actions.reorder(result));
    } else {
      const [filterState] = ((appState as any)[source.droppableId] as IModel[]).filter(({ id }) => id === draggableId);

      dispatch(allSlices[source.droppableId as keyof typeof allSlices].actions.remove(draggableId));
      dispatch(allSlices[destination.droppableId as keyof typeof allSlices].actions.update({
        ...result,
        filterState,
      }));
    }
  };

  return (
    <PageContainer>
      <StyledTitle>This is a ToDo APP with Redux</StyledTitle>
  
     
      <GridContainer container spacing={2} justifyContent='center'>
        <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Column>
              <ToDoColumn />
            </Column>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Column>
              <InProgressColumn />
            </Column>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Column>
              <DoneColumn />
            </Column>
          </Grid>
        </DragDropContext>
      </GridContainer>

    </PageContainer>
  );
};

export default Home;
